import React from 'react'
import _ from 'lodash';

import CalculatorForm from './CalculatorForm'
import Chart from './Chart.jsx'



export default class Calculator extends React.Component {

  constructor() {
    super()
    this.state = {
      currentAge: '26',
      retirementAge: '65',
      lifespanAge: '90',
      salary: '50000',
      salaryIncrease: '3',
      retirementSpending: '40000',
      marketReturn: '4',
      savings: '25',
      currentSavings: '0',
      graphData: [],
      numScenarios: [1],
      finalAmount: '0',
      amtAtRetire: '0'
    }

    this.handleCurrentAge = this.handleCurrentAge.bind(this)
    this.handleRetirementAge = this.handleRetirementAge.bind(this)
    this.handleSalary = this.handleSalary.bind(this)
    this.handleSalaryIncrease = this.handleSalaryIncrease.bind(this)
    this.handleSavings = this.handleSavings.bind(this)
    this.handleRetirementSpending = this.handleRetirementSpending.bind(this)
    this.handleInvestmentReturn = this.handleInvestmentReturn.bind(this)
    this.handleCurrentSavings = this.handleCurrentSavings.bind(this)
    this.handleLifespanAge = this.handleLifespanAge.bind(this)
    this.handleAddScenario = this.handleAddScenario.bind(this)
  }

  componentDidMount(){
    this.computeData()
  }

  computeData() {
    const yearlySalary = +this.state.salary
    const savingsPercent = +this.state.savings
    const salarySaved = (yearlySalary / 100) * savingsPercent
    const salaryIncrease = +this.state.salaryIncrease
    const yearsToRetirement = +this.state.retirementAge - +this.state.currentAge
    const yearsToEnd = +this.state.lifespanAge - +this.state.currentAge
    let retiredBool = false
    const retirementSpending = +this.state.retirementSpending ;
    //initialize with starting savings
    let accumulatedSavings = +this.state.currentSavings
    const arrOfData = [];
    const marketReturn = +this.state.marketReturn
    let currentAge = +this.state.currentAge

    for(let i = 0; i < yearsToEnd; i++) {
      accumulatedSavings += (accumulatedSavings/100) * marketReturn
      arrOfData.push({savingsAtEnd: accumulatedSavings, age: currentAge})
      currentAge += 1;
      if(i >= yearsToRetirement && !retiredBool) {
        retiredBool = true;
        this.setState({
          amtAtRetire: accumulatedSavings
        })
      }
      if(!retiredBool) {
        accumulatedSavings += salarySaved
      } else {
        accumulatedSavings -= retirementSpending;
      }

    }

    this.setState({
      finalAmount: accumulatedSavings,
      graphData: arrOfData
    })
  }

  handleCurrentAge(evt) {
    const age = evt.target.value
    console.log(typeof age)
    if(+age < 0) {
      console.log('cant be negative')
      //display warning for can't be negative
      this.setState({
        currentAge: '1'
      }, () => this.computeData())
    } else if(+age >= +this.state.retirementAge) {
      console.log(`age can't be greater than retire age`)
      //you have to change retirement age!
      this.setState({
        currentAge: age,
        retirementAge: `${+age + 1}`
      }, () => this.computeData())

    } else {
      this.setState({
        currentAge: age
      }, () => this.computeData())
    }
  }

  handleRetirementAge(evt) {
    const retireAge = evt.target.value
    if(+retireAge < 0) {
      //display no negatives error
      this.setState({
        retirementAge: '1'
      }, () => this.computeData())
    } else if(+retireAge <= +this.state.currentAge) {
      console.log('less than')
      this.setState({
        //this might produce a bug, keep an eye out
        retirementAge: retireAge,
        currentAge: `${+retireAge - 1}`
      }, () => this.computeData())
    } else {
      this.setState({
        retirementAge: retireAge
      }, () => this.computeData())
    }
  }

  handleLifespanAge(evt) {
    const ageAtDeath = evt.target.value

    //validations
    if(+ageAtDeath < +this.state.currentAge){
      this.setState({
        lifespanAge: ageAtDeath,
        currentAge: `${ageAtDeath-1}`
      }, () => {
        this.computeData()
      })
    } else {
      this.setState({
        lifespanAge: ageAtDeath
      }, () => {
        this.computeData()
      })
    }

  }

  handleSalary(evt) {
    this.setState({
      salary: evt.target.value
    }, () => this.computeData() )
  }

  handleSalaryIncrease(evt) {
    this.setState({
      salaryIncrease: evt.target.value
    }, () => this.computeData() )
  }

  handleSavings(evt) {
    this.setState({
      savings: evt.target.value
    }, () => this.computeData() )
  }

  handleRetirementSpending(evt) {
    this.setState({
      retirementSpending: evt.target.value
    }, () => this.computeData() )
  }

  handleInvestmentReturn(evt) {
    this.setState({
      marketReturn: evt.target.value
    }, () => this.computeData() )
  }

  handleCurrentSavings(evt) {
    this.setState({
      currentSavings: evt.target.value
    }, () => this.computeData() )
  }

  handleAddScenario(){
    const arr = this.state.numScenarios
    if(arr.length > 3) {
      console.log('can only have 3 scenarios')
      return
    }
    arr.push(this.state.numScenarios.length+1)
    this.setState({
      numScenarios: arr
    })
  }

  render() {
    const props = {
      handleChange: {
        handleCurrentAge: this.handleCurrentAge,
        handleRetirementAge: this.handleRetirementAge,
        handleSalary: this.handleSalary,
        handleSalaryIncrease: this.handleSalaryIncrease,
        handleRetirementSpending: this.handleRetirementSpending,
        handleInvestmentReturn: this.handleInvestmentReturn,
        handleSavings: this.handleSavings,
        handleCurrentSavings: this.handleCurrentSavings,
        handleLifespanAge: this.handleLifespanAge
      },
      state: this.state
    }

    //need to connect calculator form and make container since will pass info to rechart
    return (
      <div>
        <div>
          {this.state.numScenarios.map((currentScenario) => {
              return (<CalculatorForm key={currentScenario} props={props} />)
            })
          }
        </div>
        <div>
          {this.state.numScenarios.length < 3 ? (
            <button onClick={ this.handleAddScenario }>
              Add Scenario
            </button>)
            :
            <br />
          }
        </div>
        <Chart props={props.state}/>
      </div>
    )
  }
}


//also, make this connected component have all of the on change stuff from here.
// this way, in this container, we can "render"/create the appropriate amount of these
//containers according to number of scenarios. Once

//then, these three containers will on change to this container which will choose
//then how to render the chart or send in data.


// in order to have 3 scenarios, will need to have distinct datakeys for each
// scenario that can be identified by chart
