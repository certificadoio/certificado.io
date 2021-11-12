interface IcourseDetails {
    id?: string
    updated_at?: string
    created_at?: string
    title: string
    description: string
    url_course: string
    workload: number
    skills: string
    owner_id: string | undefined
}

interface IThemeCertificate {
    certificate_model: string
    logo: string
    title: string
    subtitle: string
    graduated_in: string
    signature: string
    footer_signature: string
    primary_color: string
    secondary_color: string
    primary_bg_color: string
    secondary_bg_color: string
    owner_id: string | undefined
}

interface State {
    progressCount: number,
    courseDetails: IcourseDetails,
    themeCertificate: IThemeCertificate,
    errors: string[],
    editMode: boolean,
    idToAction: string | null,

    toggleEditMode: (id?: string) => void,
    addProgressCount: () => void,
    rmvProgressCount: () => void,
    resetProgressCount: () => void,
    resetData: () => void,

    setCourseDetails: (newCourse: IcourseDetails) => void,
    setThemeCertificate: (newTheme: IThemeCertificate) => void,
    setErrors: (newErrors: string[]) => void,
}