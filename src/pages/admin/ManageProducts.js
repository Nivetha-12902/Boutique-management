import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import "../admin/ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Lehanga",
      category: "Women",
      price: 2000,
      description: "A beautiful evening gown for special occasions.",
    },
    {
      id: 2,
      productName: "Tshirt",
      category: "Men",
      price: 250,
      description: "Lightweight and comfortable dress for summer days.",
    },
    {
      id: 3,
      productName: "Boykid Partywear",
      category: "Kids",
      price: 1000,
      description: "Stylish suit for special occasions.",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'add' or 'edit'
  const [currentProduct, setCurrentProduct] = useState({});
  const [errors, setErrors] = useState({}); // Validation errors

  const handleModalOpen = (type, product = {}) => {
    setModalType(type);
    setCurrentProduct(product);
    setErrors({});
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentProduct({});
    setErrors({});
  };

  const handleChange = (e) => {
    setCurrentProduct({ ...currentProduct, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on change
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!currentProduct.productName) {
      newErrors.productName = "Product name is required";
    } else if (!/^[A-Za-z\s]+$/.test(currentProduct.productName)) {
      newErrors.productName = "Product name should contain only letters";
    }

    if (!currentProduct.category) {
      newErrors.category = "Category is required";
    } else if (!/^[A-Za-z\s]+$/.test(currentProduct.category)) {
      newErrors.category = "Category should contain only letters";
    }

    if (!currentProduct.price) {
      newErrors.price = "Price is required";
    } else if (isNaN(currentProduct.price) || currentProduct.price <= 0) {
      newErrors.price = "Price should be a valid positive number";
    }

    if (!currentProduct.description) {
      newErrors.description = "Description is required";
    } else if (!/^[A-Za-z\s]+$/.test(currentProduct.description)) {
      newErrors.description = "Description should contain only letters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSave = () => {
    if (validateForm()) {
      if (modalType === "add") {
        setProducts([...products, { ...currentProduct, id: Date.now() }]);
      } else if (modalType === "edit") {
        setProducts(
          products.map((product) =>
            product.id === currentProduct.id ? currentProduct : product
          )
        );
      }
      handleModalClose();
    }
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="manage-products container mt-4">
      <br></br><br></br><br></br><br></br><br></br>
      <Button
        className="add-product-btn float-end"
        onClick={() => handleModalOpen("add")}
      >
        Add Product
      </Button>
      <br></br> <br></br>
      <Table striped bordered hover className="products-table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No Products Available
              </td>
            </tr>
          ) : (
            products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.category}</td>
                <td>₹{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <Button
                    className="edit-btn"
                    onClick={() => handleModalOpen("edit", product)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    className="delete-btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Modal for Add/Edit */}
      <Modal
        className="product-modal"
        show={showModal}
        onHide={handleModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "add" ? "Add New Product" : "Edit Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                value={currentProduct.productName || ""}
                onChange={handleChange}
                placeholder="Enter Product Name"
                isInvalid={!!errors.productName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.productName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={currentProduct.category || ""}
                onChange={handleChange}
                placeholder="Enter Category"
                isInvalid={!!errors.category}
              />
              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={currentProduct.price || ""}
                onChange={handleChange}
                placeholder="Enter Price"
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">
                {errors.price}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={currentProduct.description || ""}
                onChange={handleChange}
                placeholder="Enter Description"
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="cancel-btn"
            variant="secondary"
            onClick={handleModalClose}
          >
            Cancel
          </Button>
          <Button className="save-btn" variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageProducts;
