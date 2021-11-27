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

interface Certificate {
    id: string,
    course_id: string,
    name: string,
    email: string,
    created_at: string,
    updated_at: string,
    theme_id: string,
    owner_id: string,
    id_view: string,
}

interface State {
    progressCount: number,
    courseDetails: IcourseDetails,
    themeCertificate: IThemeCertificate,
    errors: string[],
    editMode: boolean,
    idToAction: string | null,
    logoBlob: File | undefined,
    signatureBlob: File | undefined,

    toggleEditMode: (id?: string) => void,
    addProgressCount: () => void,
    rmvProgressCount: () => void,
    resetProgressCount: () => void,
    resetData: () => void,

    setCourseDetails: (newCourse: IcourseDetails) => void,
    setLogoBlob: (newBlob: File) => void,
    setSignatureBlob: (newBlob: File) => void,
    setThemeCertificate: (newTheme: IThemeCertificate) => void,
    setErrors: (newErrors: string[]) => void,
}