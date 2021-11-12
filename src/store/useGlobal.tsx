import create from 'zustand'

interface IGlobal {
    modalCreatedNewUser: boolean,
    refreshData: boolean,
    showModalCertificateEdited: boolean,
    showMobileMenu: boolean,
    showModalCreated: boolean,
    showModalDelete: boolean,
    showModalCertificate: boolean,
    showModalViewDetailsCourse: boolean,
    idToAction: string | null,
    courseToShow: IcourseDetails | null,
    searchText: string,
    showModalDeleteCertificate: boolean,
    coursesLength: number,
    certificatesLength: number,
    toggleModalCreatedNewUser: () => void,
    toggleModalDelete: (id?: string) => void,
    toggleModalCertificateEdited: () => void,
    toggleMobileMenu: () => void,
    toggleModalCreated: () => void,
    toggleModalDeleteCertificate: (id: string | null) => void,
    resetidToAction: () => void,
    toggleModalCertificateCreated: () => void,
    toggleModalViewDetailsCourse: (course?: IcourseDetails) => void,
    resetCourseToShow: () => void,
    toggleRefreshData: () => void,
    setSearchText: (newSearch: string) => void,
    setIdToAction: (id: string) => void,
    setCoursesLength: (qtd: number) => void,
    setCertificatesLength: (qtd: number) => void,
}

const useGlobal = create<IGlobal>(set => ({
    modalCreatedNewUser: false,
    refreshData: false,
    showModalCertificateEdited: false,
    showMobileMenu: false,
    showModalCreated: false,
    showModalDelete: false,
    showModalCertificate: false,
    searchText: "",
    coursesLength: 0,
    certificatesLength: 0,
    showModalViewDetailsCourse: false,
    idToAction: null,
    courseToShow: null,
    showModalDeleteCertificate: false,
    toggleModalDelete: (id) => set(state => ({ showModalDelete: !state.showModalDelete, idToAction: id || null })),
    toggleMobileMenu: () => set(state => ({ showMobileMenu: !state.showMobileMenu, })),
    toggleRefreshData: () => set(state => ({ refreshData: !state.refreshData, })),
    toggleModalCreatedNewUser: () => set(state => ({ modalCreatedNewUser: !state.modalCreatedNewUser, })),
    toggleModalDeleteCertificate: (id) => set(state => ({ showModalDeleteCertificate: !state.showModalDeleteCertificate, idToAction: id })),
    toggleModalCreated: () => set(state => ({ showModalCreated: !state.showModalCreated, })),
    toggleModalCertificateCreated: () => set(state => ({ showModalCertificate: !state.showModalCertificate, })),
    toggleModalCertificateEdited: () => set(state => ({ showModalCertificateEdited: !state.showModalCertificateEdited, })),
    toggleModalViewDetailsCourse: (course) => set(state => ({
        showModalViewDetailsCourse: !state.showModalViewDetailsCourse,
        courseToShow: course || null
    })),
    setSearchText: (newSearch) => set(state => ({ searchText: newSearch })),
    resetidToAction: () => set(state => ({ idToAction: null })),
    resetCourseToShow: () => set(state => ({ courseToShow: null })),
    setIdToAction: (id) => set(state => ({ idToAction: id })),
    setCoursesLength: (qtd) => set(state => ({ coursesLength: qtd })),
    setCertificatesLength: (qtd) => set(state => ({ certificatesLength: qtd })),
}))

export default useGlobal