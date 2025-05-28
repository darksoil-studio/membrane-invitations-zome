{ inputs, ... }:

{
  perSystem =
    { inputs'
    , self'
    , lib
    , system
    , ...
    }: {
      packages.membrane_invitations_test_dna = inputs.holochain-nix-builders.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          # Include here the zome packages for this DNA, e.g.:
          profiles_integrity = inputs'.profiles-zome.packages.profiles_integrity;
          profiles = inputs'.profiles-zome.packages.profiles;
          # This overrides all the "bundled" properties for the DNA manifest
          membrane_invitations_integrity = self'.packages.membrane_invitations_integrity;
          membrane_invitations = self'.packages.membrane_invitations;
        };
      };
    };
}

