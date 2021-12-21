interface IcourseDetails {
    id?: string
    updated_at?: string
    created_at?: string
    title: string
    description: string
    url_course: string
    workload: number
    skills: string
    owner_id: string | undefined,
    company_name: string,
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


// Interfaces do database

interface courses_io {
    id: string, //uuid
    created_at: string, //timestamp
    title: string, //
    description: string, //
    url_course: string, //
    workload: number, //
    skills: string, //
    updated_at: string, //timestamp
    owner_id: string, //uuid
}

interface themes_io {
    id: string, //uuid
    created_at: string, //timestamp
    certificate_model: string,
    course_id: string, //uuid
    footer_signature: string,
    graduated_in: string,
    logo: string,
    updated_at: string, //timestamp
    owner_id: string, //uuid
    primary_bg_color: string,
    primary_color: string,
    secondary_bg_color: string,
    secondary_color: string,
    signature: string,
    subtitle: string,
    title: string,
}

interface certificates_io {
    id: string, //uuid
    course_id: string, //uuid
    owner_id: string, //uuid
    updated_at: string, //timestamp
    email: string,
    name: string,
    theme_id: string, //uuid
    id_view: string,
}