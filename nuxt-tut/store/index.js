import axios from '~/plugins/axios';

export const state = () => {
  return {
    ids: [],
    items: []
  };
};

export const mutations = {
  setIds(state, ids) {
    state.ids = ids;
  },
  setItems(state, items) {
    state.items = items;
  }
};

export const actions = {
  async LOAD_ITEMS({ commit }, dataUrl) {
    console.log('loading items');
    const response = await axios.get(dataUrl);
    const ids = response.data;
    const tenIds = ids.slice(0, 10);

    const itemsPromises = tenIds.map(id => axios.get(`item/${id}.json`));
    const itemsResponses = await Promise.all(itemsPromises);
    const items = itemsResponses.map(res => res.data);
    // const realItems = items.map(item => {
    //   item ? item : { title: 'failed to load', id: 0 };
    // });

    commit('setItems', items);
  }
};
