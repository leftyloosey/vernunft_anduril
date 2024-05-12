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
      listName
      names
    }
  }
`
export const CHANGE_LIST_NAME = gql`
  mutation Mutation($listName: String, $id: ID) {
    changeListName(listName: $listName, id: $id) {
      names
      listName
      id
    }
  }
`
export const LIST_1_ID = '6640ee9bbb14a40888869c1c'
export const LIST_2_ID = '6640eea2bb14a40888869c1e'
export const LIST_3_ID = '6640eea7bb14a40888869c20'
