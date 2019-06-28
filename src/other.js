import React,{Component} from 'react'


class  TableDetails extends React.Component{
    render() {
        const product = this.props.product;
        const name =  product.stocked ? product.name:<span style={{color:'red'}}>{product.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}


class FormCategory extends React.Component{
    render() {
       const category =this.props.category
        return (
            <tr>
                <th>{category}</th>
            </tr>
        );
    }
}


class Table extends React.Component{
    render() {
        const rows =[]
        let onlyName = null;
        this.props.products.forEach((product)=>{
            if(product.category !== onlyName){
                rows.push(
                    <FormCategory
                        category={product.category}
                        key={product.category}/>
                );
            }
            rows.push(
                <TableDetails product={product} key={product.name} />
            )
            onlyName = product.category
        })
        return (
            <table>
                <thead>
                    <tr><th>Name</th></tr>
                    <tr><th>Price</th></tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
}


class Search extends React.Component{
    render() {
        return (
            <form>
                <input type="text" placeholder='Search'/>
                <p>
                    <input type="checkbox"/>
                    only show products in stock
                </p>
            </form>
        );
    }
}



export default class Box extends React.Component{
    render() {
        return (
            <div>
                <Search/>
                <Table products={PRODUCTS}/>
            </div>
        );
    }
}

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


