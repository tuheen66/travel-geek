
import { useQuery } from "@tanstack/react-query";
import DataTable from 'react-data-table-component';
// import MUIDataTable from "mui-datatables";




const FeaturedBlogs = () => {

    const columns = [
        {
            name: 'Srl No',
            cell: (row, index) => index + 1,
            width: "8rem",


        },
        {
            name: 'Blog Title',
            selector: row => row.title,
            width: "28rem"
        },
        {
            name: 'Blog Owner',
            selector: row => row.name,
            width: "14rem"
        },
        {
            name: 'Profile Picture',
            selector: (row) => <img className="w-16 mb-6 rounded-full" src={row.profile_pic} />,
            width: "8rem"
        },

    ]


    const { data } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://blog-website-server-ten.vercel.app/blogs')
            return res.json();
        }
    })
    const length = data?.map(obj => obj.long_description.length)
    const sortedData = data.sort((a, b) => b.long_description.length - a.long_description.length)
    const topTenDta = sortedData.slice(0, 10)
    console.log(length)

    return (
        <div className="mx-auto">

            <h2>Featured blogs page</h2>
            <DataTable
                columns={columns}
                data={topTenDta}

            />

        </div>
    );
};

export default FeaturedBlogs;