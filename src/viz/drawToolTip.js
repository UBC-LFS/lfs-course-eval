import drawCountHistogram from './drawCountHistogram'
import { stripMiddleName } from '../util/util'
import * as questionDefinitions from '../constants/questionDefinitions'

import * as d3 from 'd3'
import d3Tip from 'd3-tip'
d3.tip = d3Tip

const drawToolTip = (filter) => d3.tip().html(d => {
  const tmp = document.createElement('div')
  tmp.appendChild(drawCountHistogram(d['UMI' + filter.UMI].count).node())
  const histHTML = tmp.innerHTML
  console.log(d)
  return "<div class='d3ToolTip'>" +
    '<h3 style="text-align:center;"> ' + stripMiddleName(d.instructorName) + '</h3>' +
    '<p>Course: ' + d.course + ' ' + d.section + '</p>' +
    '<p>Question Code: ' + 'UMI' + filter.UMI + ' "' + questionDefinitions['codesAndDef']['UMI' + filter.UMI] +
    '"' + '</p>' +
    '<p>Average: ' + d['UMI' + filter.UMI].average + '</p>' +
    '<p>Dispersion Index: ' + d['UMI' + filter.UMI].dispersionIndex + '</p>' +
    '<p>Class Size: ' + d.enrolment + '</p>' +
    '<p>Response Rate: ' + Math.round(d.responseRate * 100) + '%' + '</p>' +
    '<p>Percent Favourable: ' + Math.round(d['UMI' + filter.UMI].percentFavourable * 100) + '%' + '</p>' +
    histHTML +
    '</div>'
}).direction(d => 's')

export default drawToolTip
