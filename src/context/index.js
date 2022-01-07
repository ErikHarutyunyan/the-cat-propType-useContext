import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

import { SET_CATEGORY, TAKE_ID, PAGE_CHANGE, DATA_CHANGE } from "./actions";

import reducer from "./reducer";

import { API_MAIN_URL } from "../config/serverApi";
const imagesSearch = `images/search?`;
const searchUrl = `${API_MAIN_URL}${imagesSearch}`;

const initialState = {
  categoryData: [],
  catsId: null,
  limit: 10,
  page: 1,
  cats: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  let urlPage = `&page=${state.page}`;
  let categoryId = `&category_ids=${state.catsId}`;
  let limitData = `limit=${state.limit}`;

  useEffect(() => {
    
    const apiUrlCategory = `${API_MAIN_URL}categories`;
      axios
        .get(apiUrlCategory)
        .then((response) => {
          const category = response.data;
          dispatch({ type: SET_CATEGORY, payload: category });
        })
        .catch((err) => {
          console.log(err);
        });

  }, []);

  const handleCategory = (id) => {
    dispatch({ type: TAKE_ID, payload: parseInt(id) });
  };

  const handleContent = () => {
    dispatch({ type: PAGE_CHANGE });
  };
  const handleMemory = (data) => {
    dispatch({ type: DATA_CHANGE, payload: data });
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${searchUrl}${limitData}${urlPage}${categoryId}`)
      .then((resp) => {
        handleMemory(resp.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [categoryId, urlPage, limitData]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        isLoading,
        handleCategory,
        handleContent,
        handleMemory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
