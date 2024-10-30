#!/bin/bash
# Script de sincronización usando rsync a través de SSH

INSTANCE_NAME="apetech-vm"
ZONE="us-central1-a"  # Cambia si tu instancia está en otra zona
VM_DIR="/home/rmanzimerica/asociacion_apetech/"

# Usa gcloud para conectarse con rsync a la instancia en Google Cloud
gcloud compute ssh rmanzimerica@$INSTANCE_NAME --zone $ZONE --command \
    "rsync -av --exclude='node_modules' --exclude='.git' asociacion_apetech rmanzimerica@$INSTANCE_NAME:$VM_DIR"
