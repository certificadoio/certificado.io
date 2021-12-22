const checkCourseDetails = (courseDetails: {}) => {
    let errors: string[] = []
    let fields = Object.entries(courseDetails)

    fields.map(field => {

        if (field[1] === 'company_name') return

        if (typeof field[1] === 'string' && field[1] === '') {
            errors.push(`${field[0]} não pode estar vazio`)
        }

        if (typeof field[1] === 'number' && field[1] === 0) {
            errors.push(`${field[0]} não pode ser igual 0`)
        }
    })

    return errors
}

const checkThemeCertificate = (theme: {}) => {
    let errors: string[] = []
    let fields = Object.entries(theme)

    fields.map(field => {
        if (typeof field[1] === 'string' && field[1] === '') {
            errors.push(`${field[0]} não pode estar vazio`)
        }
    })

    return errors
}

export { checkCourseDetails, checkThemeCertificate }