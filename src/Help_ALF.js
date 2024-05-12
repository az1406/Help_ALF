function findSpaceship(map) {
    const rows = map.trim().split('\n'); 
        
    for (let row = rows.length - 1; row >= 0; row--) {
        const chars = rows[row].trim().split(''); 
        
        
        for (let col = 0; col < chars.length; col++) {
            if (chars[col] === 'X') {
                
                return [col, rows.length - 1 - row];
            }
        }
    }

    return "Spaceship lost forever.";
}