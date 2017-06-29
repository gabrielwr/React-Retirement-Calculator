import React from 'react'

const Calculator = (props) => (
  <div>
    <form action="index.html" method="post">
      <fieldset>
        <div className = "column">
            <label for="age" >Age: <br />
              <input type="text" id="age" name="user_age" />
            </label><br />
            <label for = "savingsYR">Savings Per Year:<br />
              <input type = "text" id= "savingsYR" name="user_savings" />
            </label><br />
            <label for = "yearsSaved">Years of Saving:<br />
              <input type = "text" id= "yearsSaved" name="user_yrs_saved"/>
            </label><br />
        </div>
        <div className = "column">
            <label for = "net-worth">Net Worth:<br />
              <input type = "text" id= "net-worth" name="user_NW"/>
            </label><br />
            <label for = "retireYear">Retire Age:<br />
              <input type = "text" id= "retireYear" name="user_retire"/>
            </label><br />
            <label> Single?
              <input type = "radio" id= "statusY" name="user_status"/>
              <label for="statusY">Y</label>
              <input type = "radio" id= "statusN" name="user_status"/>
              <label for="statusN">N</label>
            </label><br />
        </div>
        <div className = "column">
          <label for = "ROI"> Return on Investment:<br />
            <input type = "text" id= "ROI" name="user_ROI"/>
          </label><br />
          <label for = "retireAmt">Spending in Retirement<br />
            <input type = "text" id= "retireAmt" name="user_amt_retirement"/>
          </label><br />

          <button type="submit">Submit</button>
          <button type="reset">Reset</button>

        </div>
      </fieldset>
    </form>
  </div>
)

export default Calculator
