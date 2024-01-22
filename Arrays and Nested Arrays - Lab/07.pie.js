function pieaceOfPie(pieFlavors, startFlavor, endFlavor) {
    // Find the indices of startFlavor and endFlavor
    const startIndex = pieFlavors.indexOf(startFlavor);
    const endIndex = pieFlavors.indexOf(endFlavor);

    // Check if both startFlavor and endFlavor are in the array
    if (startIndex !== -1 && endIndex !== -1) {
        // Use slice to extract the section between startFlavor and endFlavor (inclusive)
        const pieSection = pieFlavors.slice(startIndex, endIndex + 1);
        return pieSection;
    } else {
       
        return [];
    }
}
pieaceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)