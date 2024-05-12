import { gql } from '@apollo/client'

export const GET_NAMES = gql`
  query Query($id: ID) {
    getNames(id: $id) {
      names
      listName
      id
    }
  }
`
export const PUSH_LIST = gql`
  mutation Mutation($id: ID, $names: [String]) {
    getOneMutation(id: $id, names: $names) {
      id
      names
    }
  }
`
export const GET_LISTS = gql`
  query Query {
    listList {
      names
    }
  }
`
export const CHANGE_LIST_NAME = gql`
  mutation Mutation($listName: String, $id: ID) {
    changeList1Name(listName: $listName, id: $id) {
      names
      listName
      id
    }
  }
`
export const LIST_1_ID = '6639b9313f1a848c33ad97bf'
export const LIST_2_ID = '663f181447b198095739408c'
export const LIST_3_ID = '663f1da8f1e25a627308adbc'
