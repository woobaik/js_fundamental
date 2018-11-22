
/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
/// ===== ES5 Constructor =====
// function Infrastructure(name, year) {
//   this.name = name;
//   this.year = year;
// }
//
// var sf = new Infrastructure('haram', 1987)
//
//


class Infrastructure {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// var sf = new Infrastructure('haram', 1987)
// console.log(sf.name)


class Park extends Infrastructure {
  constructor(name, year, trees, area) {
    super(name, year);
    this.trees = trees;
    this.area = area;
  }

  density () {
    const density = this.trees / this.area
    return density
  }
}



// let zealot = new Park('Zealot', 1987, 288, 1991);
// zealot.density()

class Street extends Infrastructure {
  constructor(name, year, length, size=3) {
    super(name,year);
    this.length = length;
    this.size = size;
  }
}

// let briggs = new Street('briggs', 1970, 100, 'tiny')
// console.log(briggs)



const parks = [
  new Park('Avalon Plaza Park', 2010, 5000, 6000),
  new Park('Open Memorial Park', 1986, 11, 10),
  new Park('Golden Gate Park', 1952, 19999, 200042)
]
// parks.push(new Park('zzz',1999,222,111))
// console.log(parks.map(x => x.name));


const streets = [
  new Street('Briggs', 2018, 30, 1),
  new Street('Geary', 1930, 2000),
  new Street('101', 1970, 20000, 5)
]


const sumAverageCalc = (arr) => {
  const sum = arr.reduce((prev,current,index) => prev + current, 0);
  return [sum, sum / arr.length]
}

// console.log(averageCalc([1,2,3,4,5]))


// console.log(streets)
// 1. Tree density of each park in the town (forumla: number of trees/park area)
const density = ()=> {
  parks.forEach(x => {
    console.log(`${x.name}'s TREE DENSITY is ${x.density()}.`)
  })
}
// console.log(density())


// 2. Average age of each town's park (forumla: sum of all ages/number of parks)

const averageAge = (arr) => {
  let ageArray = arr.map(x =>
    new Date().getFullYear() - x.year)
  console.log(`Our town's PARK AGE AVERAGE is ${sumAverageCalc(ageArray)[1]}`)
}
// averageAge(parks)

// 3. The name of the park that has more than 1000 trees

const forrestPark = () => {
  let result = parks.filter(x => x.trees > 120)
  result.forEach(x => {
    console.log(`${x.name} has more than 1000 trees, with ${x.trees}`)
  })
}

// forrestPark()

// 4. Total and average length of the town's streets

const streetSummary = () => {
  let streetArray = streets.map(x => x.length)
  let [total, average] = sumAverageCalc(streetArray)
  console.log(`Our town has streets total of ${total}, and average of ${average}`)

}

streetSummary()
const report = () => {
  console.log('========FINAL REPORT==========')

}
