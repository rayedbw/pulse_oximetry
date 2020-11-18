/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIndividual = /* GraphQL */ `
  mutation CreateIndividual(
    $input: CreateIndividualInput!
    $condition: ModelIndividualConditionInput
  ) {
    createIndividual(input: $input, condition: $condition) {
      id
      firstName
      lastName
      gender
      dob
      oximeter {
        items {
          id
          individualID
          spo2
          heartRate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      pulseOximetryRange {
        items {
          id
          individualID
          minSpo2
          minHeartRate
          maxHeartRate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateIndividual = /* GraphQL */ `
  mutation UpdateIndividual(
    $input: UpdateIndividualInput!
    $condition: ModelIndividualConditionInput
  ) {
    updateIndividual(input: $input, condition: $condition) {
      id
      firstName
      lastName
      gender
      dob
      oximeter {
        items {
          id
          individualID
          spo2
          heartRate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      pulseOximetryRange {
        items {
          id
          individualID
          minSpo2
          minHeartRate
          maxHeartRate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteIndividual = /* GraphQL */ `
  mutation DeleteIndividual(
    $input: DeleteIndividualInput!
    $condition: ModelIndividualConditionInput
  ) {
    deleteIndividual(input: $input, condition: $condition) {
      id
      firstName
      lastName
      gender
      dob
      oximeter {
        items {
          id
          individualID
          spo2
          heartRate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      pulseOximetryRange {
        items {
          id
          individualID
          minSpo2
          minHeartRate
          maxHeartRate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOximeter = /* GraphQL */ `
  mutation CreateOximeter(
    $input: CreateOximeterInput!
    $condition: ModelOximeterConditionInput
  ) {
    createOximeter(input: $input, condition: $condition) {
      id
      individualID
      spo2
      heartRate
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateOximeter = /* GraphQL */ `
  mutation UpdateOximeter(
    $input: UpdateOximeterInput!
    $condition: ModelOximeterConditionInput
  ) {
    updateOximeter(input: $input, condition: $condition) {
      id
      individualID
      spo2
      heartRate
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteOximeter = /* GraphQL */ `
  mutation DeleteOximeter(
    $input: DeleteOximeterInput!
    $condition: ModelOximeterConditionInput
  ) {
    deleteOximeter(input: $input, condition: $condition) {
      id
      individualID
      spo2
      heartRate
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPulseOximetryRange = /* GraphQL */ `
  mutation CreatePulseOximetryRange(
    $input: CreatePulseOximetryRangeInput!
    $condition: ModelPulseOximetryRangeConditionInput
  ) {
    createPulseOximetryRange(input: $input, condition: $condition) {
      id
      individualID
      minSpo2
      minHeartRate
      maxHeartRate
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePulseOximetryRange = /* GraphQL */ `
  mutation UpdatePulseOximetryRange(
    $input: UpdatePulseOximetryRangeInput!
    $condition: ModelPulseOximetryRangeConditionInput
  ) {
    updatePulseOximetryRange(input: $input, condition: $condition) {
      id
      individualID
      minSpo2
      minHeartRate
      maxHeartRate
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePulseOximetryRange = /* GraphQL */ `
  mutation DeletePulseOximetryRange(
    $input: DeletePulseOximetryRangeInput!
    $condition: ModelPulseOximetryRangeConditionInput
  ) {
    deletePulseOximetryRange(input: $input, condition: $condition) {
      id
      individualID
      minSpo2
      minHeartRate
      maxHeartRate
      createdAt
      updatedAt
      owner
    }
  }
`;
