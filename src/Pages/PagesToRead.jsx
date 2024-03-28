import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const PagesToRead = () => {

    const bookDetails = useLoaderData();

    const [chartDatas, setChartDatas] = useState([]);
    useEffect(() => {
        const stringifiedReadList = localStorage.getItem('readList');
        const readlist = JSON.parse(stringifiedReadList);
        const updatedReadList = [];
        readlist.map(readBooks => {
            bookDetails.filter(book => {
                if (readBooks === book.bookId) {
                    const chartData = { name: book.bookName, uv: book.totalPages}
                    updatedReadList.push(chartData);
                }
            })
            setChartDatas(updatedReadList);
        })
    }, [bookDetails]);

    const data = chartDatas;


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='mt-12'>
            <ResponsiveContainer width="95%" height={600}>
                <BarChart
                    width={1000}
                    height={700}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;