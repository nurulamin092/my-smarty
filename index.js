const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello my over smarty pant!!')
});
const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01923453' },
    { id: 2, name: 'shabnur', email: 'shabnur@gmail.com', phone: '0192993453' },
    { id: 3, name: 'purnima', email: 'purnima@gmail.com', phone: '01423453' },
    { id: 4, name: 'bobita', email: 'bobita@gmail.com', phone: '01823453' },
    { id: 5, name: 'popy', email: 'popy@gmail.com', phone: '01123453' },
    { id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '01423453' },
    { id: 7, name: 'nabila', email: 'nambila@gmail.com', phone: '044923453' },
    { id: 8, name: 'jambila', email: 'jabila@gmail.com', phone: '044923453' },
];

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }

});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});
app.get('/fruits', (req, res) => {
    res.send(['Mango', 'Apple', 'oranges', 'dates'])
});
app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavor')
});

app.post('/user', (req, res) => {
    console.log('post request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.listen(port, () => {
    console.log('Listening to port ', port);
});