describe("findSpaceship", function() {
    it("should return the correct coordinates if spaceship is found", function() {
        const map = "..........\n..........\n..........\n.......X..\n..........\n..........";
        const coordinates = findSpaceship(map);
        expect(coordinates).toEqual([7, 2]); // Expected coordinates [row, column]
    });

    it("should return 'Spaceship lost forever.' if spaceship is not found", function() {
        const map = "..........\n..........\n..........\n..........\n..........\n..........";
        const result = findSpaceship(map);
        expect(result).toEqual("Spaceship lost forever.");
    });

    it("should handle a map with multiple rows and columns", function() {
        const map = "......\n...X..\n......";
        const coordinates = findSpaceship(map);
        expect(coordinates).toEqual([3, 1]);
    });
});