export const ormDemoFormat = (data) => {
  return {
    formData: ormFormData(data), // 表格数据
    pageData: ormPageData(data) // 页面数据
  }
}
export const ormPageData = data => {
  const formSingle = (n, w, d, l) => ({
    name: n,
    wendu: w,
    daxiao: d,
    leixin: l
  })
  const temp = []
  if (data.aName || data.aLeixin) {
    temp.push(formSingle(data.aName, data.aWendu, data.aDaxiao, data.aLeixin))
  }
  if (data.bName || data.bLeixin) {
    temp.push(formSingle(data.bName, data.bWendu, data.bDaxiao, data.bLeixin))
  }
  if (data.cName || data.cLeixin) {
    temp.push(formSingle(data.cName, data.cWendu, data.cDaxiao, data.cLeixin))
  }
  if (data.dName || data.dLeixin) {
    temp.push(formSingle(data.dName, data.dWendu, data.dDaxiao, data.dLeixin))
  }
  return temp
}
export const ormFormData = (data) => {
  const formSingle = (p, s, t, v, a, b, d, sm) => ({
    pono: Math.ceil(Math.random() * 10) + '',
    state: '烧炉',
    time: '100min',
    vault: '1209℃',
    ability: '60.4',
    burning: '55.7min',
    discard: '888.9℃',
    smokeT: '666.7℃'
  })
  const temp = []
  if (data.aName || data.aLeixin) {
    temp.push(formSingle(data.aName, data.aWendu, data.aDaxiao, data.aLeixin))
  }
  if (data.bName || data.bLeixin) {
    temp.push(formSingle(data.bName, data.bWendu, data.bDaxiao, data.bLeixin))
  }
  if (data.cName || data.cLeixin) {
    temp.push(formSingle(data.cName, data.cWendu, data.cDaxiao, data.cLeixin))
  }
  if (data.dName || data.dLeixin) {
    temp.push(formSingle(data.dName, data.dWendu, data.dDaxiao, data.dLeixin))
  }
  return temp
}

export const apiDemoData = () => {
  return Promise.resolve({
    code: 200,
    msg: '成功',
    data: {
      aName: '一号炉子',
      aWendu: 89,
      aDaxiao: 70,
      aLeixin: '加热炉',
      bName: 'b号炉子',
      bWendu: 9,
      bDaxiao: 50,
      bLeixin: 'b加热炉',
      cName: 'c号炉子',
      cWendu: 89,
      cDaxiao: 75,
      cLeixin: '加热炉c',
      dName: 'd号炉子',
      dWendu: 8,
      dDaxiao: 70,
      dLeixin: '加热炉d',
      eName: '号炉e',
      eWendu: 8,
      eDaxiao: 70,
      eLeixin: '加热炉e'
    }
  })
}
