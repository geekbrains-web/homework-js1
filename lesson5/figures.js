var figures = [];

figures.push({ side: "w", figure: "R" });
figures.push({ side: "w", figure: "H" });
figures.push({ side: "w", figure: "B" });
figures.push({ side: "w", figure: "Q" });
figures.push({ side: "w", figure: "K" });
figures.push({ side: "w", figure: "B" });
figures.push({ side: "w", figure: "H" });
figures.push({ side: "w", figure: "R" });

for (var i = 8; i < 16; i++) {
    figures.push({ side: "w", figure: "p" });
}

for (var i = 16; i < 48; i++) {
    figures.push({side: "",figure: ""});
}
for (var i = 48; i < 56; i++) {
    figures.push({side:"b",figure:"p"});
}

figures.push({ side: "b", figure: "R" });
figures.push({ side: "b", figure: "H" });
figures.push({ side: "b", figure: "B" });
figures.push({ side: "b", figure: "Q" });
figures.push({ side: "b", figure: "K" });
figures.push({ side: "b", figure: "B" });
figures.push({ side: "b", figure: "H" });
figures.push({ side: "b", figure: "R" });

var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

var figuresIcons = [];

figuresIcons.push({ side: "w", figure: '<i class="fas fa-chess-rook"></i>' });
figuresIcons.push({ side: "w", figure: '<i class="fas fa-chess-knight"></i>' });
figuresIcons.push({ side: "w", figure: '<i class="fas fa-chess-bishop"></i>' });
figuresIcons.push({ side: "w", figure: '<i class="fas fa-chess-queen"></i>' });
figuresIcons.push({ side: "w", figure: '<i class="fas fa-chess-king"></i>' });
figuresIcons.push({ side: "w", figure: '<i class="fas fa-chess-bishop"></i>' });
figuresIcons.push({ side: "w", figure: '<i class="fas fa-chess-knight"></i>' });
figuresIcons.push({ side: "w", figure: '<i class="fas fa-chess-rook"></i>' });

for (var i = 8; i < 16; i++) {
    figuresIcons.push({ side: "w", figure: "<i class=\"fas fa-chess-pawn\"></i>" });
}

for (var i = 16; i < 48; i++) {
    figuresIcons.push({ side: " ", figure: " " });
}
for (var i = 48; i < 56; i++) {
    figuresIcons.push({ side: "b", figure: "<i class=\"fas fa-chess-pawn\"></i>" });
}

figuresIcons.push({ side: "b", figure: '<i class="fas fa-chess-rook"></i>' });
figuresIcons.push({ side: "b", figure: '<i class="fas fa-chess-knight"></i>' });
figuresIcons.push({ side: "b", figure: '<i class="fas fa-chess-bishop"></i>' });
figuresIcons.push({ side: "b", figure: '<i class="fas fa-chess-queen"></i>' });
figuresIcons.push({ side: "b", figure: '<i class="fas fa-chess-king"></i>' });
figuresIcons.push({ side: "b", figure: '<i class="fas fa-chess-bishop"></i>' });
figuresIcons.push({ side: "b", figure: '<i class="fas fa-chess-knight"></i>' });
figuresIcons.push({ side: "b", figure: '<i class="fas fa-chess-rook"></i>' });

