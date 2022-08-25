const initialState = {
  courseName: '',
  courseNum: '',
  courseClass: '',
  courseCollege: -1,
  courseDept: -1,
  courseCollegeName: '',
  courseDeptName: '',
  unPassLectures: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COURSE_NAME':
      return {
        ...state,
        courseName: action.payload,
      };
    case 'SET_COURSE_NUM':
      return {
        ...state,
        courseNum: action.payload,
      };
    case 'SET_COURSE_CLASS':
      return {
        ...state,
        courseClass: action.payload,
      };
    case 'SET_COURSE_COLLEGE':
      return {
        ...state,
        courseCollege: action.payload,
      };
    case 'SET_COURSE_DEPT':
      return {
        ...state,
        courseDept: action.payload,
      };
    case 'SET_COURSE_COLLEGE_NAME':
      return {
        ...state,
        courseCollegeName: action.payload,
      };
    case 'SET_COURSE_DEPT_NAME':
      return {
        ...state,
        courseDeptName: action.payload,
      };
    case 'SET_UNPASS_LECTURES':
      return {
        ...state,
        unPassLectures: state.unPassLectures.concat(action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
