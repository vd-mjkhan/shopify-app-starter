import React, { useEffect, useState } from "react";
import { Card, DataTable, Layout, Button } from "@shopify/polaris";
import Styles from './../global.css'
import axios from 'axios'
import normalizeOrders from './normalizer/orderNormalizer'

const API_URL = 'https://aca7f61f.ngrok.io/orders';

export default function OrderRegister() {
    // useEffect(() => {
    // })
    const [orders, setOrders] = useState([])
    useEffect(() => {
        console.log("useEffect initialized!")
        const url = API_URL
        axios.get(url, {
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(response => {
                const kk = normalizeOrders(response.data.orders);
                console.log("orders", kk);
                setOrders(kk)
                // console.log("orders", normalizeOrders(response.data.orders));
            })
            .catch(err => console.log(err))

    }, []);
    console.log("order state here", orders)
    return (
        <React.Fragment>
            <Layout>
                <Layout.Section>
                    <Card title="Order Register">
                        <Button textAlign="right" size="medium" outline>Edit Settings</Button>
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card>
                        {/* <DataTable
                            columnContentTypes={[
                                "text",
                                "numeric",
                                "text",
                                "text",
                                "numeric",
                                "numeric"
                            ]}
                            headings={[
                                "Email",
                                "Order Number",
                                "Status",
                                "Date Order Placed",
                                "Amount",
                                "Tracking Number"
                            ]}
                            rows={orders}
                            footerContent={`Showing ${orders.length} of ${orders.length} results`}
                        /> */}
                        {orders && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Order Number</th>
                                        <th>Status</th>
                                        <th>Date Order Placed</th>
                                        <th>Amount</th>
                                        <th>Tracking Number</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {orders.map((order => {
                                        return (
                                            <tr>
                                                <td>{order.email}</td>
                                                <td>{order.orderNumber}</td>
                                                <td>{order.status}</td>
                                                <td>{order.dateOrderPlaced}</td>
                                                <td>{order.amount}</td>
                                                <td>{order.trackingNumber}</td>
                                            </tr>


                                        )
                                    }))}
                                </tbody>
                            </table>
                        )}
                    </Card>
                </Layout.Section>
            </Layout>
        </React.Fragment>
    );
}
