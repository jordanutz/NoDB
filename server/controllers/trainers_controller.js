let trainers = [
  {
    name: "Ash Ketchum",
    age: 10,
    gender: "male",
    hometown: "Pallet Town",
    region: "Kanto",
    id: 0,
    url: "https://pre00.deviantart.net/9836/th/pre/f/2015/144/d/f/madonna_80s_outtake_by_confessiononmdna-d8ujtzr.jpg"
},
  {
    name: "Misty",
    age: 10,
    gender: "female",
    hometown: "Cerulean City",
    region: "Kanto",
    id: 1,
    url: "https://pre00.deviantart.net/9836/th/pre/f/2015/144/d/f/madonna_80s_outtake_by_confessiononmdna-d8ujtzr.jpg"
  },
  {
    name: "Brock",
    age: 15,
    gender: "male",
    hometown: "Pewter City",
    region: "Kanto",
    id: 2,
    url: "https://pre00.deviantart.net/9836/th/pre/f/2015/144/d/f/madonna_80s_outtake_by_confessiononmdna-d8ujtzr.jpg"
  }
]

module.exports = {
  read: (req, res) => {
    res.status(200).send(trainers);
  }
}
