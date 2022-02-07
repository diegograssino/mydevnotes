import React, {useEffect, useState} from "react";
import {Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {VscChevronDown} from "react-icons/vsc";

import {firestore} from "../database/firebase";
import COLORS from "../constants/colors";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    firestore
      .collection("categories")
      .get()
      .then((results) => {
        const finalResult = [];

        results.forEach((result) => {
          const {id} = result;
          const finalData = {id, ...result.data()};

          finalResult.push(finalData);

          return finalResult;
        });
        setCategories(finalResult);
      });
  }, []);

  return (
    <Menu>
      <MenuButton
        as={Button}
        borderColor={COLORS.darkBorderArticleContent}
        color={COLORS.darkText}
        colorScheme="white"
        focusBorderColor="teal.500"
        rightIcon={<VscChevronDown />}
        size="xs"
        variant="outline"
      >
        Categorías
      </MenuButton>
      <MenuList>
        <MenuItem color="black" fontSize="sm">
          <RouterLink to="/">TODAS</RouterLink>
        </MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.id} color="black" fontSize="sm">
            <RouterLink to={`/category/${category.title.toLowerCase()}`}>
              {category.title}
            </RouterLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategoryMenu;
