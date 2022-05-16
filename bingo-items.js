
let mix = new URLSearchParams(window.location.search).get('mix');

var restream = [
    "Encontrar Biggoron",
    "Encontrar Farore's",
    "Arco 'Bowlocked'",
    "'A seed é Jet'",
    "ZL sem ZL",
    "Entrar em Fire sem settar Pierre",
    "Runner conheceu o vazio de Shadow (void out em shadow temple)",
    "Tem uma tunica e não usou (Fire - Goron tunic/ Water - Zora tunic)",
    "Bk de water em central pillar",
    "Errou a quick kill da gohma",
    "Runner isolou um check",
    "Runner pegou a dica de LA",
    "Segunda magia em Shadow",
    "Alguém pediu uma 'Contagem agressiva'",
    "2 runners em Forest",
    "Item relevante em Tektite grotto",
    "Kakariko village WOTH/Path",
    "Water stone foolish",
    "Bomb bag depois de 1h de seed",
    "Dodongo Foolish",
    "Ad por esporte",
    "Comentariasta citou Lógica de chaves de spirit",
    "Bottom of the bottom of the well (Map chest)",
    "Bottom of the well Foolish",
    "Pegar uma dica do que acabou de pegar (Aranhar)",
    "Wastelands/OGC foolish (PQDM)",
    "Sun song pra voltar pra porta",
    "Acabou as Flechas/Bombas",
    "Runner fez chickens",
    "Dicas do fundo do lago (qualquer uma)",
    "'nICE arrows'",
];

var voicechat = [
    "Gusxandi disse 'INTERESSANTE'",
    "Light mode do Gabriel foi lembrado",
    "Mirage tentou aliciar alguém para o Skyward Sword",
    "Algum clipe do GrafitteX foi comentado",
    "CesarMartins12 foi parafraseado",
    "Tepedino Tutoriais foi mencionado",
    "Momento tepeDINÁ (Pedir um item e ele vir)",
    "Mais de 50% da call em Live",
];


var bingoItems = [];
if(mix == "mixed"){
    bingoItems = restream.concat(voicechat);
}else{
    bingoItems = restream;
}