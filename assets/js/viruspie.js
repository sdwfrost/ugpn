virusBarChart = [
  {
    key: "Number of sequences",
    values: [
      {
        "label" : "HIV-1" ,
        "value" : 590685
      } ,
      {
        "label" : "Influenza A" ,
        "value" : 380043
      } ,
      {
        "label" : "Hepatitis C" ,
        "value" : 173046
      } ,
      {
        "label" : "Hepatitis B" ,
        "value" : 80253
      } ,
      {
        "label" : "Other" ,
        "value" : 758011
      }
    ]
  }
];

nv.addGraph(function() {
  var width = 800, height = 500;
  var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .staggerLabels(true)
      //.staggerLabels(virusBarChart[0].values.length > 8)
      .tooltips(true)
      .showValues(false)
      .width(width)
      .height(height);

  chart.xAxis
        .axisLabel('Viral species');

  chart.yAxis
        .axisLabel('Number')
        .tickFormat(d3.format(',.0f'));

  d3.select('#viruspie svg')
      .datum(virusBarChart)
      .transition().duration(2000)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});
