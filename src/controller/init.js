/* global $ */
import initOverallInstructor from './overallInstructorDataController'
import initUMIDispersion from './UMIDispersionController'
import initCoursePerformance from './coursePerformanceController'
import initFacultyDept from './facultyDeptController'
import initEnrolmentTrend from './enrolmentTrendController'
import initUMIInstructor from './UMIInstructorController'
import initEnrolmentLineChart from './enrolmentLineChartController'
import initFacultyDeptLineChart from './facultyDeptLineChartController'
import initStats from './statsController'

const init = () => {
  $('.selectpicker').selectpicker()
  $('.bootstrap-select').click(function () {
    $(this).addClass('open')
  })

  initOverallInstructor()

  initUMIDispersion()

  initCoursePerformance()

  initFacultyDept()

  initUMIInstructor()

  initEnrolmentTrend()

  initEnrolmentLineChart()

  initFacultyDeptLineChart()

  initStats()
}

export default init
