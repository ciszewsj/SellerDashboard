let user3Data = () => {
    return {
        orders: {
            notPaid: 0, notSent: 0, returns: 0,
        }, qualitySales: {
            mark: {}, worst: []
        }, feedback: {
            best: [], worst: [], all: []
        }, offers: {
            best: {
                amount: [], transactions: []
            }, worst: {
                amount: [], views: []
            }
        }, chart: {
            today: {
                sold: [], transactions: []
            }, week: {
                sold: [], transactions: [],
            }, lastWeek: {
                sold: [], transactions: [],
            }
        }
    }
}
export default user3Data
