const normalizeOrders = (orders) => {
    return orders.map((order) => {
        return {
            email: order.email,
            orderNumber: order.order_number,
            status: order.fulfillment_status,
            dateOrderPlaced: order.processed_at,
            amount: order.total_price,
            trackingNumber: order.fulfillment_status || 'Not fulfilled'
        }
    })
}

export default normalizeOrders