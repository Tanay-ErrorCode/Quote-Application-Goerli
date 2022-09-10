import yaml, os, shutil, json
from brownie import Quote, accounts
from scripts.helpful_scripts import get_account

def main():
    account = get_account()

    app = Quote.deploy({'from':account})
    print(f"Quote deployed at {app.address}")

    update_front_end()

def update_front_end():
    copy_folders_to_front_end("./build", "./my-app/src/chain-info")

    with open("./brownie-config.yaml", "r") as brownie_config:
        config_dict = yaml.load(brownie_config, Loader=yaml.FullLoader)
        with open("./my-app/src/brownie-config.json", "w") as brownie_config_json:
            json.dump(config_dict, brownie_config_json)
    print("Front end updated!")



def copy_folders_to_front_end(src, dest):
    if os.path.exists(dest):
        shutil.rmtree(dest)
    shutil.copytree(src, dest)


