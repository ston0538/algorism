describe("해쉬 테이블", () => {
  function hashFunction(string, size) {
    let hash = 17;
    const stringSplit = string.split("");
    stringSplit.forEach((string) => {
      hash = (13 * hash * string.charCodeAt()) % size;
    });
    return hash;
  }
  function hashTable() {
    const array = new Array(3);
    const setItem = (key, value) => {
      const index = hashFunction(key, array.length);
      if (array[index]) {
        array[index].push([key, value]);
      } else {
        array[index] = [[key, value]];
      }
      return array;
    };
    const getItem = (key) => {
      const index = hashFunction(key, array.length);
      const result = array[index].find((s) => s[0] === key)[1];
      return result;
    };
    return Object.freeze({
      setItem,
      getItem,
    });
  }
  it("hash table", () => {
    const result = hashTable();
    result.setItem("name", "KHK");
    result.setItem("home", "seoul");
    result.setItem("age", 12);
    result.setItem("birthDay", "191919");
    const result1 = result.getItem("name");
    const result2 = result.getItem("age");
    const result3 = result.getItem("home");
    const result4 = result.getItem("birthDay");
    expect(result1).toBe("KHK");
    expect(result2).toBe(12);
    expect(result3).toBe("seoul");
    expect(result4).toBe("191919");
  });
});
