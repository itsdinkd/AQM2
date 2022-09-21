
  // Food Unification Script
// Whether or not to unify items in inventory
global["INVENTORY_UNIFY"] = false
// Whether or not to unify items in world
global["ITEM_UNIFY"] = true
// Whether or not to unify recipes
global["RECIPE_UNIFY"] = true

// Mod priorities
global["unifypriorities"] = [
    "farmersdelight",
    "sandwichable",
    "croptopia",
    "valley"
]
global["unifyexclude"] = new Set(["farmersdelight:tomato"])

let tags = []

let customtags = []

// ---------- PLATFORM SPECIFIC ----------

if (Platform.isFabric()) {
    // Easier way to add multiple tags on fabric
    let tagGen = [
        "vegetables/onion=",
        "vegetables/tomatoes=",
        "vegetables/cabbage=",
        "dough=",
        "grains/rice=",
        "food/bacon="
    ]
    for (let line of tagGen) {
        let data = line.split("=")
        let ms = (data[0]).split(",")

        for (let material of ms) {
                tags.push("c:" + material)
        }
    }
}

// ---------- END PLATFORM SPECIFIC ----------

// ---------- END CONFIG ----------

function tryTag(tag) {
    try {
        return Ingredient.of("#"+tag)
    } catch (err) {
        return null
    }
}

// Create custom tags
onEvent('tags.items', event => {
    let root = "unifytags:tag"
    let i = 0
    for (let ctag of customtags) {
        let tag = event.get(root + i)
        for (let item of ctag) {
            try {
                tag.add(item)
            } catch (err) {}
        }
        tags.push(root + i)
        ++i
    }
})

// Replace input and output of recipes (and iterate over tags!)
onEvent("recipes", event => {
    // Iterate over tags to generate tagitemfood and remove bad tags (they should be loaded)
    let truetags = []
    let tagitemfood = new Map()
    tagLoop:
    for (let tag of tags) {
        let ingr = tryTag(tag)
        if (ingr) {
            let stacks = ingr.getStacks().toArray()
            // Only load tags with 2 or more items
            if (stacks.length > 1) {
                truetags.push(tag)

                for (let mod of global["unifypriorities"]) {
                    for (let stack of stacks) {
                        if (stack.getMod() == mod) {
                            if (!global["unifyexclude"].has(String(stack.getId()))) tagitemfood[tag] = stack.getId()
                            continue tagLoop
                        }
                    }
                }
            
                tagitemfood[tag] = stacks[0].getId()
            }
        }
    }

    // Globalize tags
    global["unifytags"] = truetags
    global["tagitemfood"] = tagitemfood
    
    // Unify the rest
    if (global["RECIPE_UNIFY"]) {
        for (let tag of global["unifytags"]) {
            let ingr = tryTag(tag)
            if (ingr) {
                let stacks = ingr.getStacks().toArray()
                let oItem = global["tagitemfood"][tag]
                for (let tItem of stacks) {
                    let itemId = String(tItem.getId())
                    if (global["unifyexclude"].has(itemId)) continue
                    
                    event.replaceInput({}, itemId, "#"+tag)
                    event.replaceOutput({}, itemId, oItem)
                }
            }
        }
    }
})

let invnames = new Set([
    "net.minecraft.inventory.container.PlayerContainer",
    "net.minecraft.class_1723",
    "net.minecraft.world.inventory.InventoryMenu"
])

// Handle inventory change (to check for unificaiton)
// Unfortunately it gets called twice due to setting the inventory.
if (global["INVENTORY_UNIFY"]) {
    onEvent("player.inventory.changed", event => {
        let ename = String(event.getEntity().getOpenInventory().getClass().getName())
        if (invnames.has(ename)) {
            // Get held item
            let heldItem = event.getItem()
            let itemId = String(heldItem.getId())
            
            // Check if item is excluded
            if (global["unifyexclude"].has(itemId)) return
            
            // Check for every tag in the list
            for (let tag of global["unifytags"]) {
                let ingr = tryTag(tag)
                if (ingr && ingr.test(heldItem)) {
                    // If item is in tag, determine if it needs to be changed
                    let tItem = global["tagitemfood"][tag]
                    if (tItem != itemId) {
                        // Fix slot number
                        let slot = event.getSlot()
                        if (slot <= 5) slot += 36
                        else if (slot == 45) slot = 40
                        else if (slot >= 36) slot -= 36
                        // Update item
                        event.getEntity().inventory.set(slot, Item.of(tItem, heldItem.getCount()))
                    }
                    break
                }
            }
        }
    })
}

// Items on ground
if (global["ITEM_UNIFY"]) {
    onEvent("entity.spawned", event => {
        let entity = event.getEntity()
        if (entity.getType() == "minecraft:item") {
            let gItem = entity.getItem()
            if (gItem) {
                let itemId = String(gItem.getId())
                // Check if item is excluded
                if (global["unifyexclude"].has(itemId)) return

                // Check for every tag in the list
                for (let tag of global["unifytags"]) {
                    let ingr = tryTag(tag)
                    if (ingr && ingr.test(gItem)) {
                        // If item is in tag, determine if it needs to be changed
                        let tItem = global["tagitemfood"][tag]
                        if (tItem != itemId) {
                            entity.setItem(Item.of(tItem, gItem.getCount()))
                        }
                        break
                    }
                }
            }
        }
    })
}


onEvent('recipes', event => {
    event.remove({id: 'valley:bacon_raw'})
    event.shapeless('2x farmersdelight:cabbage_leaf', ['farmersdelight:cabbage', 'croptopia:knife'])
})