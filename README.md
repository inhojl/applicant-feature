# Applicants Feature

## Get Started

### `npm install`

### `npm start`

## Technologies Used
- React
- Redux
- Sass

## Frontend Routes
- ```/applicants```
- ```/applicants/new```
- ```/applicants/:id/edit```

## Component Hierarchy
- App
  - ApplicantList
    - ApplicantDataTable
    - Modal
  - NewApplicantForm
    - ApplicantForm
  - EditApplicantForm
    - ApplicantForm

## Redux State
Normalized redux state for fast lookup

```
{
  applicants: {
    loaded: false,
    data: {
      0:{id: 0,firstName:'Firs…-00-0000'},
      1:{id: 1,firstName:'Firs…-00-0000'},
      2:{id: 2,firstName:'Firs…-00-0000'},
      3:{id: 3,firstName:'Firs…-00-0000'},
      4:{id: 4,firstName:'Firs…-00-0000'},
      4:{id: 5,firstName:'Firs…-00-0000'},
      5:{id: 6,firstName:'Firs…-00-0000'},
      6:{id: 7,firstName:'Firs…-00-0000'},
      7:{id: 8,firstName:'Firs…-00-0000'},
    }
  }
}
```

## Future Improvements
- Responsiveness
- Accessibility
- Form validation
- XSS prevention
