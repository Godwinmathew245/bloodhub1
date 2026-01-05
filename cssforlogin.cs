body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    width: 100%;
    max-width: 400px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 20px;
}

.form-box {
    text-align: center;
}

.hidden {
    display: none;
}

h2 {
    margin-bottom: 20px;
    color: #333;
}

form input {
    width: 100%;
    padding: 12px 15px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
}

form button {
    width: 100%;
    padding: 12px;
    background: #ff5252;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
}

form button:hover {
    background: #e64444;
}

.toggle-form a {
    color: #007bff;
    text-decoration: none;
}

.toggle-form a:hover {
    text-decoration: underline;
}
