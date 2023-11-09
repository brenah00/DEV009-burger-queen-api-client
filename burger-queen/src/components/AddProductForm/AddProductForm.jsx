import { useState } from "react";
import { addProduct, addUser, getAllUsers, getProducts } from "../../services/request";
import { completed, showAlertError, warning } from "../../alert/aler";


export default function AddProductForm({ setIsopen, setProducts/*usersList, setUsers */ }) {

  const [itemName, setName] = useState('');
  const [imgURL, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [itemType, setType] = useState('type');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImgChange = (e) => {
    setImg(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  function clearURLinput() {
    setImg('');
  }
  function saveProduct() {
    if (itemType !== 'type' && itemName.length > 0 && parseInt(price) > 0 && imgURL.length > 0) {
      addProduct(localStorage.getItem('token'), itemName, price, imgURL, itemType)
        .then((response) => {
          setIsopen(false);
          completed('The product has been saved.');
          getProducts(localStorage.token)
            .then((response) => {
              setProducts(response.data);
            })
            .catch((error) => {
              showAlertError("An error has occurred while obtaining list of products.");
            });
        })
        .catch((error) => {
          showAlertError(error.response.data);
        });
    } else {
      parseInt(price) < 1 ? showAlertError('Enter a valid price') : showAlertError('Complete all the information.');
    }
  }
  return (
    <>
      <h2 className="text-4xl text-bgqueen-primary text-center font-bold">Add product</h2>
      <form className="w-4/5 mt-5 flex flex-col gap-y-4 items-center">
        <input
          type="text"
          name="name"
          className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-xl h-14"
          placeholder="Product name"
          value={itemName}
          onChange={handleNameChange}
        />
        <input
          type="number"
          name="price"
          className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-xl h-14"
          placeholder="Price"
          value={price}
          onChange={handlePriceChange}
        />
        <article className="w-full flex items-center">
          <input
            type="url"
            name="imageUrl"
            className="w-11/12 block rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-xl h-14"
            placeholder="Image url"
            value={imgURL}
            onChange={handleImgChange}
          />
          <i className="fa-solid fa-eraser text-bgqueen-primary  text-3xl m-1"
            data-testid="clear-url"
            onClick={clearURLinput}></i>
        </article>
        <select
          name="type"
          className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-xl h-14"
          value={itemType}
          onChange={handleTypeChange}
        >
          <option value='type'>
            Select a type
          </option>
          <option value="Breakfast">
            Breakfast
          </option>
          <option value="Lunch">
            Lunch
          </option>
          {/* <option value="dinner">
            Dinner
          </option> */}
        </select>
        <button
          type="button"
          className="bg-bgqueen-primary text-white w-1/2 h-12 rounded-full text-xl mb-3"
          onClick={saveProduct}
          id='save-btn'>
          Save
        </button>
      </form>
    </>
  );
}