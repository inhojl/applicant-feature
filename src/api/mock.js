import uniqid from 'uniqid';

export async function getMockApplicants() {

  await new Promise(resolve => {
    setTimeout(resolve, 1000)
  })

  const data = []
  for (let i = 0; i < 30; i++) {
    data.push({
      id: uniqid(),
      firstName: `First ${i}`,
      lastName: `Last ${i}`,
      occupation: `Occupation ${i}`,
      ssn: '000-00-0000'
    })
  }
  
  return {
    count: 33,
    data
  }

}

