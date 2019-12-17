import React from "react";
import { Card, DataTable, Layout, Button } from "@shopify/polaris";
import Styles from './../global.css'

export default function OrderRegister() {
    const dataRows = [
        ["test@example.com", "1001", 'open', 'Delivery', "12.11.2019", "09:05AM", "10.11.2019", '$2600', 42500121001],
        ["luna@example.com", "1002", 'open', 'D&I', "14.12.2019", "11:15AM", "08.12.2019", '$2450', 42500121002],
        ["john@example.com", "1003", 'open', 'Delivery', "16.12.2019", "03:00PM", "09.12.2019", '$250', 42500121003],
        ["jack@example.com", "1004", 'open', 'D&I', "18.12.2019", "08:30PM", "10.11.2019", '$1800', 42500121004],
        ["franci@example.com", "1005", 'open', 'Shipping', "23.12.2019", "09:45AM", "22.12.2019", '$759', 42500121005],
    ];

    return (
        <Layout>
            <Layout.Section>
                <Card title="Order Register">
                    <Button textAlign="right" size="medium" outline>Edit Settings</Button>
                </Card>
            </Layout.Section>
            <Layout.Section>
                <Card>
                    <DataTable
                        columnContentTypes={[
                            "text",
                            "numeric",
                            "text",
                            "text",
                            "text",
                            "text",
                            "text",
                            "text",
                            "numeric",
                            "numeric"
                        ]}
                        headings={[
                            "Email",
                            "Order Number",
                            "Status",
                            "Delivery Type",
                            "Deliv. Date",
                            "Deliv. Time",
                            "Date Order Placed",
                            "Amount",
                            "Tracking Number"
                        ]}
                        rows={dataRows}
                        footerContent={`Showing ${dataRows.length} of ${dataRows.length} results`}
                    />
                </Card>
            </Layout.Section>
        </Layout>
    );
}
