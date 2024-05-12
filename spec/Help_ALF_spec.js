describe("findSpaceship", function() {
    it("should return the correct coordinates if spaceship is found", function() {
        const map = "..........\n..........\n..........\n.......X..\n..........\n..........";
        const coordinates = findSpaceship(map);
        expect(coordinates).toEqual([7, 2]); // Expected coordinates [row, column]
    });
});