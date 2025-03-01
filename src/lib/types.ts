export type Fruit = {
  id: number
  name: FruitNamesInEnglish
  family: FruitFamiliesInEnglish
  order: FruitOrdersInEnglish
  genus: FruitGenusInEnglish
  nutritions: {
    calories: number,
    fat: number,
    sugar: number,
    carbohydrates: number,
    protein: number
  }
}

export type FruitNamesInEnglish =
  "persimmon"
  | "strawberry"
  | "banana"
  | "tomato"
  | "pear"
  | "apple"
  | "orange"
  | "durian"
  | "blackberry"
  | "lingonberry"
  | "kiwi"
  | "lychee"
  | "pineapple"
  | "fig"
  | "gooseberry"
  | "passionfruit"
  | "plum"
  | "greenapple"
  | "raspberry"
  | "watermelon"
  | "lemon"
  | "mango"
  | "blueberry"
  | "guava"
  | "apricot"
  | "melon"
  | "tangerine"
  | "pitahaya"
  | "lime"
  | "pomegranate"
  | "dragonfruit"
  | "grape"
  | "morus"
  | "feijoa"
  | "avocado"
  | "kiwifruit"
  | "cranberry"
  | "cherry"
  | "peach"
  | "jackfruit"
  | "annona"
  | "papaya"
  | "ceylon gooseberry"
  | "japanese persimmon"
  | "pumpkin"
  | "pomelo"
  | "mangosteen"
  | "horned melon"
  | "hazelnut";

export type FruitNamesInPortuguese =
  "caqui"
  | "morango"
  | "banana"
  | "tomate"
  | "pera"
  | "maçã"
  | "laranja"
  | "durião"
  | "amora"
  | "oxicoco vermelho"
  | "kiwi"
  | "lichia"
  | "abacaxi"
  | "figo"
  | "groselha"
  | "maracujá"
  | "ameixa"
  | "maçã verde"
  | "framboesa"
  | "melancia"
  | "limão"
  | "manga"
  | "mirtilo"
  | "goiaba"
  | "damasco"
  | "melão"
  | "tangerina"
  | "pitaia"
  | "lima"
  | "romã"
  | "fruta do dragão"
  | "uva"
  | "amoreira"
  | "feijoa"
  | "abacate"
  | "oxicoco"
  | "cereja"
  | "pêssego"
  | "jaca"
  | "anona"
  | "mamão"
  | "groselha do ceilão"
  | "caqui japonês"
  | "abóbora"
  | "pomelo"
  | "mangostão"
  | "melão de chifre"
  | "avelã";

export type FruitFamiliesInEnglish =
  'ebenaceae'
  | 'rosaceae'
  | 'musaceae'
  | 'solanaceae'
  | 'malvaceae'
  | 'ericaceae'
  | 'actinidiaceae'
  | 'sapindaceae'
  | 'bromeliaceae'
  | 'moraceae'
  | 'grossulariaceae'
  | 'passifloraceae'
  | 'rutaceae'
  | 'cucurbitaceae'
  | 'anacardiaceae'
  | 'myrtaceae'
  | 'cactaceae'
  | 'lythraceae'
  | 'vitaceae'
  | 'lauraceae'
  | 'betulaceae'
  | 'clusiaceae'
  | 'caricaceae'
  | 'annonaceae'
  | 'salicaceae';

export type FruitGenusInEnglish =
  "diospyros"
  | "fragaria"
  | "musa"
  | "solanum"
  | "pyrus"
  | "durio"
  | "rubus"
  | "vaccinium"
  | "apteryx"
  | "litchi"
  | "ananas"
  | "ficus"
  | "ribes"
  | "passiflora"
  | "prunus"
  | "citrus"
  | "malus"
  | "citrullus"
  | "mangifera"
  | "psidium"
  | "cucumis"
  | "cactaceae"
  | "punica"
  | "selenicereus"
  | "vitis"
  | "morus"
  | "sellowiana"
  | "persea"
  | "actinidia"
  | "artocarpus"
  | "corylus"
  | "garcinia"
  | "cucurbita"
  | "carica"
  | "annonas"
  | "dovyalis";

export type FruitOrdersInEnglish =
  "rosales"
  | "zingiberales"
  | "solanales"
  | "malvales"
  | "ficales"
  | "struthioniformes"
  | "sapindales"
  | "poales"
  | "saxifragales"
  | "malpighiales"
  | "cucurbitales"
  | "myrtales"
  | "cucurbitaceae"
  | "caryophyllales"
  | "vitales"
  | "myrtoideae"
  | "laurales"
  | "ericales"
  | "fagales"
  | "brassicales";
