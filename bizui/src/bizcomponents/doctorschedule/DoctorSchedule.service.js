
import { get,put,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'

const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}doctorScheduleManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}doctorScheduleManager/loadDoctorSchedule/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateDoctor = (ownerClass, id, filterKey, pageNo) => {
 
  const url = `${PREFIX}doctorScheduleManager/requestCandidateDoctor/ownerClass/id/filterKey/pageNo/`
  const requestParameters = {id, ownerClass,filterKey, pageNo}
  return postForm({url,requestParameters})
}	

const transferToAnotherDoctor = (id, parameters) => {
  const url = `${PREFIX}doctorScheduleManager/transferToAnotherDoctor/id/anotherDoctorId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidatePeriod = (ownerClass, id, filterKey, pageNo) => {
 
  const url = `${PREFIX}doctorScheduleManager/requestCandidatePeriod/ownerClass/id/filterKey/pageNo/`
  const requestParameters = {id, ownerClass,filterKey, pageNo}
  return postForm({url,requestParameters})
}	

const transferToAnotherPeriod = (id, parameters) => {
  const url = `${PREFIX}doctorScheduleManager/transferToAnotherPeriod/id/anotherPeriodId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateDepartment = (ownerClass, id, filterKey, pageNo) => {
 
  const url = `${PREFIX}doctorScheduleManager/requestCandidateDepartment/ownerClass/id/filterKey/pageNo/`
  const requestParameters = {id, ownerClass,filterKey, pageNo}
  return postForm({url,requestParameters})
}	

const transferToAnotherDepartment = (id, parameters) => {
  const url = `${PREFIX}doctorScheduleManager/transferToAnotherDepartment/id/anotherDepartmentId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateExpenseType = (ownerClass, id, filterKey, pageNo) => {
 
  const url = `${PREFIX}doctorScheduleManager/requestCandidateExpenseType/ownerClass/id/filterKey/pageNo/`
  const requestParameters = {id, ownerClass,filterKey, pageNo}
  return postForm({url,requestParameters})
}	

const transferToAnotherExpenseType = (id, parameters) => {
  const url = `${PREFIX}doctorScheduleManager/transferToAnotherExpenseType/id/anotherExpenseTypeId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}



const requestCandidateHospital = (ownerClass, id, filterKey, pageNo) => {
 
  const url = `${PREFIX}doctorScheduleManager/requestCandidateHospital/ownerClass/id/filterKey/pageNo/`
  const requestParameters = {id, ownerClass,filterKey, pageNo}
  return postForm({url,requestParameters})
}	

const transferToAnotherHospital = (id, parameters) => {
  const url = `${PREFIX}doctorScheduleManager/transferToAnotherHospital/id/anotherHospitalId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







// Filter this out when no functions

const  listFunctions = () => {
  return get({
    url: `${PREFIX}doctorScheduleService/listFunctions/`,
  })
}


const  saveRequest = (data) => {

  return put({
    url: `${PREFIX}doctorScheduleService/save/`,
    data,
  })
}


const  processRequest = (data) => {

  return put({
    url: `${PREFIX}doctorScheduleService/process/`,
    data,
  })
}

const DoctorScheduleService = { view,
  load,
  requestCandidateDoctor,
  requestCandidatePeriod,
  requestCandidateDepartment,
  requestCandidateExpenseType,
  requestCandidateHospital,
  transferToAnotherDoctor,
  transferToAnotherPeriod,
  transferToAnotherDepartment,
  transferToAnotherExpenseType,
  transferToAnotherHospital, listFunctions, saveRequest, processRequest}
export default DoctorScheduleService

