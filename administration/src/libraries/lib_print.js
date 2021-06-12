let printer = {}

printer.test = async (_printer) => {
    return await printer.printe(_printer, 'Test d\'impression :)')
}

printer.printe = async (_printer, data, cut=false) => {
    console.log('PRINT -> ' + _printer.ip + ' (cut:'+ cut +')')
    console.log('Data => ' + data)
    return true
}

export default printer