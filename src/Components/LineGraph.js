import ReactApexChart from "react-apexcharts";


const LineGraph = () => {

    // Line Bar 
  const module = ['Teamcenter', 'Teamcenter Function', 'BMIDE', 'ITK', 'ITK Function', 'RAC', 'AWC','AWC Functional'];
  const marks = [15, 10, 8, 5, 11, 12, 19, 16]; // Sample marks obtained for each subject
  const maxMarks = 20; // Assuming maximum marks for each subject is 100

  // Calculate percentages for each subject
  const percentages = marks.map(mark => Math.round((mark / maxMarks) * 100 * 10) / 10);

  const series = [
  {
      name: 'Marks Percentage',
      data: percentages
  }
  ];
  
  const options = {
      chart: {
          height: 250,
          type: 'line',
          zoom:{
          enabled:false
          }
      },
      plotOptions: {
          bar: {
          horizontal: true,
          columnWidth: '55%',
          endingShape: 'rounded',
          dataLabels : {
              position: 'top',
          }
          },
      },
      dataLabels: {
          enabled: true
      },
      xaxis: {
          categories: module,
      },
      yaxis: {
          title: {
          text: 'Percentage of Marks Obtained'
          }
      },
      fill: {
          opacity: 1
      },
    };
    return (
        <>
            <div className='pt-16 '>
                <ReactApexChart options={options} series={series} type="line" height={600} width={750} />
            </div>
        </>
    )
}


export default LineGraph;