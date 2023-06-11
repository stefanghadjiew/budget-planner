export const responseMessageTypes = {
  success: {
    user: {
      CREATION_SUCCESS: 'CREATION SUCCESS',
      DELETION_SUCCESS: 'DELETION SUCCESS',
      UPDATE_SUCCESS: 'UPDATE SUCCESS',
    },
  },
  failure: {
    user: {
      CREATION_ERROR: 'CREATION_ERROR',
      DELETION_ERROR: 'DELETION_ERROR',
      UPDATE_ERROR: 'UPDATE_ERROR',
    },
  },
  conflict: {
    user: {
      CREATION_CONFLICT: 'CREATION CONFLICT',
      DELETION_CONFLICT: 'DELETION CONFLICT',
      UPDATE_CONFLICT: 'UPDATE CONFLICT',
    },
  },
};

const generateErrorMessage = (
  messageType: string,
  interpolationVariable: string,
): string => {
  switch (messageType) {
    case responseMessageTypes.failure.user.CREATION_ERROR:
      return `Failed to create user: ${interpolationVariable}.`;
    case responseMessageTypes.failure.user.DELETION_ERROR:
      return `Failed to delete user: ${interpolationVariable}. User doesen't exist!`;
    case responseMessageTypes.failure.user.UPDATE_ERROR:
      return `Failed to update user: ${interpolationVariable}. User doesen't exist!`;
    default:
      return 'Default error message';
  }
};

const generateSuccessMessage = (
  messageType: string,
  interpolationVariable: string,
): string => {
  switch (messageType) {
    case responseMessageTypes.success.user.CREATION_SUCCESS:
      return `User with e-mail ${interpolationVariable} created successfully`;
    case responseMessageTypes.success.user.DELETION_SUCCESS:
      return `User with id ${interpolationVariable} deleted`;

    case responseMessageTypes.success.user.UPDATE_SUCCESS:
      return `User with id: ${interpolationVariable} updated successfully`;
    default:
      return 'Default message generated';
  }
};

const generateConflictMessage = (
  messageType: string,
  interpolationVariable: string,
): string => {
  switch (messageType) {
    case responseMessageTypes.conflict.user.CREATION_CONFLICT:
      return `Failed to create user with email: ${interpolationVariable}. User already exists !`;
    case responseMessageTypes.conflict.user.DELETION_CONFLICT:
      return `Failed to delete user with id: ${interpolationVariable}.`;
    case responseMessageTypes.conflict.user.UPDATE_CONFLICT:
      return `Failed to update user with id: ${interpolationVariable}.`;
    default:
      return 'Default message generated';
  }
};

export const createResponseMessage = (
  type: string,
  interpolationVariable: string | undefined,
) => {
  if (interpolationVariable) {
    switch (type) {
      case responseMessageTypes.success.user.CREATION_SUCCESS:
        return generateSuccessMessage(
          responseMessageTypes.success.user.CREATION_SUCCESS,
          interpolationVariable,
        );
      case responseMessageTypes.success.user.DELETION_SUCCESS:
        return generateSuccessMessage(
          responseMessageTypes.success.user.DELETION_SUCCESS,
          interpolationVariable,
        );
      case responseMessageTypes.failure.user.DELETION_ERROR:
        return generateErrorMessage(
          responseMessageTypes.failure.user.DELETION_ERROR,
          interpolationVariable,
        );
      case responseMessageTypes.conflict.user.CREATION_CONFLICT:
        return generateConflictMessage(
          responseMessageTypes.conflict.user.CREATION_CONFLICT,
          interpolationVariable,
        );
      case responseMessageTypes.conflict.user.DELETION_CONFLICT:
        return generateConflictMessage(
          responseMessageTypes.conflict.user.DELETION_CONFLICT,
          interpolationVariable,
        );
      case responseMessageTypes.conflict.user.UPDATE_CONFLICT:
        return generateConflictMessage(
          responseMessageTypes.conflict.user.UPDATE_CONFLICT,
          interpolationVariable,
        );
      default:
        return 'Default response created';
    }
  } else {
    return 'No interpolation variable provided';
  }
};
