import { Chart } from "react-google-charts";

function clasifyByCategory(list){
    const categoryMap = new Map()
    list.forEach(element => {
        if(!categoryMap.get(element.category)){
            categoryMap.set(element.category,element.amount)
        }{
            const prev = categoryMap.get(element.category)
            categoryMap.set(element.category, (prev + element.amount))
        }
    });
    return categoryMap
}

export default function PieChart({monthList}){
    
    const data = [
        ["Category", "Monthly amount"]
      ];
    const newData = clasifyByCategory(monthList)

      newData.forEach((value, key) => data.push([key, value]))
      
      console.log('updated data',data)
    

      return (
        <Chart
          chartType="PieChart"
          data={data}
          width={"100%"}
          height={"400px"}
        />
      );
}