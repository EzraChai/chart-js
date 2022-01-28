import { BarChart } from './components/BarChart'
import { LineChart } from './components/LineChart'
import { PieChart } from './components/PieChart'
import {useState} from "react"
import {UserData as Data} from "./Data"

function App() {

  const [userData, setUserData] = useState({
    labels: Data.map(user => user.year),
    datasets: [{
      label: "Users Gained",
      data: Data.map(user => user.userGain),
      backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
      ],
      borderColor:"black",
      borderWidth: 2
    }]
  })

  return (
    <div className="App">
      <div style={{width:"1200px"}}>
        <BarChart chartData={userData}/>
        <LineChart chartData={userData}/>
        <PieChart chartData={userData}/>
      </div>
    </div>
  )
}

export default App
