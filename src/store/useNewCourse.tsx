import create from 'zustand'

const defaultCourse = {
    title: '',
    description: '',
    url_course: '',
    workload: 0,
    skills: '',
    owner_id: '',
    company_name: ''
}

const defaultTheme = {
    certificate_model: '',
    logo: '',
    title: '',
    subtitle: '',
    graduated_in: '',
    signature: '',
    footer_signature: '',
    primary_color: '#000',
    secondary_color: '#808080',
    primary_bg_color: '#3C59BE',
    secondary_bg_color: '#DAE2FF',
    owner_id: ''
}

const useNewCourse = create<State>(set => ({
    progressCount: 0,
    courseDetails: defaultCourse,
    themeCertificate: defaultTheme,
    errors: [],
    editMode: false,
    idToAction: null,
    logoBlob: undefined,
    signatureBlob: undefined,

    toggleEditMode: (id) => set(state => ({ editMode: !state.editMode, idToAction: id || null })),
    addProgressCount: () => set(state => ({ progressCount: state.progressCount + 1 })),
    rmvProgressCount: () => set(state => ({ progressCount: state.progressCount - 1 })),
    resetProgressCount: () => set(state => ({ progressCount: 0 })),
    resetData: () => set(state => ({ courseDetails: defaultCourse, themeCertificate: defaultTheme })),

    setCourseDetails: (newCourse) => set(state => ({ courseDetails: newCourse })),
    setLogoBlob: (newBlob) => set(state => ({ logoBlob: newBlob })),
    setSignatureBlob: (newBlob) => set(state => ({ signatureBlob: newBlob })),
    setThemeCertificate: (newTheme) => set(state => ({ themeCertificate: newTheme })),
    setErrors: (newErrors) => set(state => ({ errors: newErrors }))
}))

export default useNewCourse