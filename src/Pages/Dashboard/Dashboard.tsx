import { Button, Card } from "antd"

import './Dashboard.scss'
const Dashboard = () => {
    const data = [
        {
            key: 1,
            name:"users",
            count:20
        },
        {
            key: 2,
            name:"orders",
            count:13
        },
        {
            key: 3,
            name:"products",
            count:15
        },
        {
            key: 4,
            name:"categories",
            count:10
        },
        {
            key: 5,
            name:"reviews",
            count:5
        },
    ]
  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="content">
            {data.map((item) => (
                <Card key={item.key} hoverable>
                    <div className="card-info">
                        <h3 className="title-card">
                            {item.name} :
                        </h3>
                        <span className="count">
                            {item.count}
                        </span>
                    </div>
                    <Button type="primary" shape="round" block >View</Button>
                </Card>
            ))}
        </div>
      </div>
    </>
  )
}

export default Dashboard